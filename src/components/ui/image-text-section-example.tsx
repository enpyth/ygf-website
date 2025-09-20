'use client'

import {
    ImageTextSection,
    ImageLeftTextRight,
    TextLeftImageRight,
    ImageLeftTextRightWithButton,
    TextLeftImageRightWithButton
} from './image-text-section'

// 使用示例
export function ImageTextSectionExample() {
    const brandImage = {
        src: "/home/brand.png",
        alt: "YGF Brand Building"
    }

    const productImage = {
        src: "/home/product.png",
        alt: "YGF Hotpot Products"
    }

    const handleLearnMore = () => {
        console.log('Learn More clicked')
    }

    const handleViewProducts = () => {
        console.log('View Products clicked')
    }

    return (
        <div className="space-y-0">
            {/* 基础版本 - 默认颜色 */}
            <ImageLeftTextRight
                image={brandImage}
                title="Our Brand"
                description="With nearly 7,000 stores worldwide, YGF is bringing the authentic taste of hotpot to Australia — fresh, bold, and made for everyone."
            />

            {/* 自定义背景和文字颜色 */}
            <TextLeftImageRight
                image={productImage}
                title="Our Products"
                description="Where taste meets wellness — fresh ingredients, bold flavors, and endless choices for a healthy, delicious hotpot experience."
                textBackgroundColor="bg-gradient-to-br from-orange-100 to-red-100"
                titleColor="text-orange-800"
                descriptionColor="text-orange-600"
            />

            {/* 深色主题版本 */}
            <ImageLeftTextRightWithButton
                image={brandImage}
                title="Our Brand"
                description="With nearly 7,000 stores worldwide, YGF is bringing the authentic taste of hotpot to Australia — fresh, bold, and made for everyone."
                buttonText="LEARN MORE"
                onButtonClick={handleLearnMore}
                textBackgroundColor="bg-gray-900"
                titleColor="text-white"
                descriptionColor="text-gray-300"
            />

            {/* 主题色背景版本 */}
            <TextLeftImageRightWithButton
                image={productImage}
                title="Our Products"
                description="Where taste meets wellness — fresh ingredients, bold flavors, and endless choices for a healthy, delicious hotpot experience."
                buttonText="VIEW PRODUCTS"
                onButtonClick={handleViewProducts}
                textBackgroundColor="bg-primary/10"
                titleColor="text-primary"
                descriptionColor="text-primary/80"
            />

            {/* 使用通用组件，指定变体和颜色 */}
            <ImageTextSection
                image={brandImage}
                title="Custom Layout"
                description="This is using the main component with variant prop and custom colors."
                variant="image-left"
                textBackgroundColor="bg-gradient-to-r from-blue-50 to-indigo-100"
                titleColor="text-blue-900"
                descriptionColor="text-blue-700"
            />
        </div>
    )
}
