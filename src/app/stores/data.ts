import StarIcon from '@mui/icons-material/Star'
import ScheduleIcon from '@mui/icons-material/Schedule'

export interface Store {
    id: string
    name: string
    address: string
    tag: string
    iconType: 'star' | 'schedule'
    coordinates: {
        lat: number
        lng: number
    }
    status: 'open' | 'opening' | 'coming-soon'
    phone?: string
    hours?: string[]
    description?: string
    features?: string[]
}

export const stores: Store[] = [
    {
        id: 'adelaide-cbd',
        name: 'Adelaide Chinatown Flagship',
        address: '99 Gouger Street, Adelaide, SA 5000',
        tag: 'Flagship',
        iconType: 'star',
        coordinates: { lat: -34.9285, lng: 138.6007 },
        status: 'open',
        // phone: '+61 087119 8917',
        // hours: [
        //     'Monday - Friday: 11:00 AM - 9:00 PM',
        //     'Saturday - Sunday: 10:00 AM - 10:00 PM'
        // ],
        description: 'Our flagship store located in the heart of Adelaide Chinatown, offering authentic Chinese cuisine with modern dining experience.',
        features: ['Modern dine-in experience', 'Convenient takeaway options', 'Student-friendly promotions']
    },
    {
        id: 'mawson-lakes',
        name: 'Adelaide Mawsonlakes Store',
        address: 'Shop9,1-3 Metro Parade, Mawson Lakes, SA 5095',
        tag: 'Opening',
        iconType: 'star',
        coordinates: { lat: -34.8, lng: 138.6 },
        status: 'open',
        phone: '+61 087119 8917',
        // hours: [
        //     'Monday - Friday: 11:00 AM - 9:00 PM',
        //     'Saturday - Sunday: 10:00 AM - 10:00 PM'
        // ],
        description: 'Our second store located in the heart of Mawson Lakes, offering authentic Chinese cuisine with modern dining experience.',
    },
    {
        id: 'marion-westfield',
        name: 'Adelaide Marion Store',
        address: 'Shop 1149, Westfield Marion, 297 Diagonal Road, Oaklands Park SA 5046',
        tag: 'Opening Nov 2025',
        iconType: 'schedule',
        coordinates: { lat: -35.0180, lng: 138.5710 },
        status: 'opening',
        description: 'Coming soon to Westfield Marion! This new location will bring our signature flavors to the southern suburbs of Adelaide.'
    },
    {
        id: 'brisbane-cbd',
        name: 'Brisbane Store',
        address: 'Shop T-09 Burpengary East Shopping Centre 116-122 Buckley Road, Burpengary East QLD 4505',
        tag: 'Opening Nov 2025',
        iconType: 'schedule',
        coordinates: { lat: -27.4698, lng: 153.0251 },
        status: 'opening',
        description: 'Expanding to Brisbane CBD! Our new Queensland location will feature the same quality and service you love.'
    },
    {
        id: 'more-locations',
        name: 'More locations coming soon',
        address: 'Australia',
        tag: 'Coming soon',
        iconType: 'schedule',
        coordinates: { lat: -25.0, lng: 133.0 },
        status: 'coming-soon',
        description: 'We are actively looking for new locations across Australia. Stay tuned for updates!'
    }
]

// Helper function to get icon component
export const getStoreIcon = (iconType: 'star' | 'schedule') => {
    return iconType === 'star' ? StarIcon : ScheduleIcon
}

// Helper function to find store by ID
export const getStoreById = (id: string): Store | undefined => {
    return stores.find(store => store.id === id)
}
