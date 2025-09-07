'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CloudUpload, Delete, Loader2 } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { ItemWithData } from '@/types/items';

interface EditItemFormShadcnProps {
  item: ItemWithData;
}

export default function EditItemFormShadcn({ item }: EditItemFormShadcnProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>(item.image_url || '');
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    category: ''
  });

  useEffect(() => {
    setFormData({
      name: item.name || '',
      description: item.description || '',
      price: item.price?.toString() || '',
      category: '' // Remove category since it's not in the new schema
    });
  }, [item]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Create FormData to handle file upload
      const formDataToSend = new FormData();
      formDataToSend.append('data', JSON.stringify({
        name: formData.name,
        description: formData.description,
        price: parseFloat(formData.price),
      }));

      if (imageFile) {
        formDataToSend.append('image', imageFile);
      }

      const response = await fetch(`/api/items/${item.id}`, {
        method: 'PUT',
        body: formDataToSend,
      });

      if (!response.ok) {
        throw new Error('Failed to update item');
      }

      toast.success('Item updated successfully!');
      router.push(`/dashboard/item/${item.id}`);
    } catch (error) {
      console.error('Error updating item:', error);
      toast.error('Failed to update item. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImageFile(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <Card className="max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Edit Item</CardTitle>
        <p className="text-muted-foreground">
          Update the item details below.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              placeholder="Enter item name"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              placeholder="Enter item description"
              required
              rows={4}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="price">Price *</Label>
            <Input
              id="price"
              type="number"
              value={formData.price}
              onChange={(e) => handleInputChange('price', e.target.value)}
              placeholder="0.00"
              required
              step="0.01"
              min="0"
            />
          </div>


          <div className="space-y-2">
            <Label>Image Upload</Label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />

            {!imagePreview ? (
              <Button
                type="button"
                variant="outline"
                onClick={triggerFileInput}
                className="w-full h-32 border-dashed flex flex-col items-center justify-center gap-2"
              >
                <CloudUpload className="w-8 h-8" />
                <span>Click to upload image</span>
              </Button>
            ) : (
              <div className="relative inline-block w-full">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-48 object-cover rounded-lg"
                />
                <Button
                  type="button"
                  variant="secondary"
                  size="icon"
                  onClick={handleRemoveImage}
                  className="absolute top-2 right-2 h-8 w-8 bg-white/80 hover:bg-white/90"
                >
                  <Delete className="w-4 h-8" />
                </Button>
              </div>
            )}

            <p className="text-sm text-muted-foreground">
              Supported formats: JPG, PNG, GIF. Max size: 5MB
            </p>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="submit"
              disabled={isLoading}
              className="flex-1"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Updating...
                </>
              ) : (
                'Update Item'
              )}
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
              className="flex-1"
            >
              Cancel
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
