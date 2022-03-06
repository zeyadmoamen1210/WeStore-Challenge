const plansMixins = {
    data(){
        return {
            customPlanFeatures: ['Storage', 'Pick & Pack', 'Labeling', 'Inventory & Reporting', 'Handling in and out', 'Access To Customer Portal', 'Customer Support', 'Last-mile delivery across UAE', 'Cash On Delivery', 'Returns', 'Customized Packaging', 'Kitting', 'Product in'],
            plans: [
                {
                    id: 1,
                    name: 'Starter',
                    price: 499,
                    "Storage": '5 CBM across UAE',
                    "Pick & Pack": 'Up to 60 Orders',
                    "Labeling": 'Included',
                    "Inventory Management": 'Included',
                    "Delivery & Returns": '+ AED 15/order',
                    "Cash On Delivery": '+ AED 5/order' 
                },
                {
                    id:2,
                    name: 'Advanced',

                    price: 1199,
                    "Storage": '10 CBM across UAE',
                    "Pick & Pack": 'Up to 200 Orders',
                    "Labeling": 'Included',
                    "Inventory Management": 'Included',
                    "Delivery & Returns": '+ AED 15/order',
                    "Cash On Delivery": '+ AED 5/order' 
                },
                {
                    id:3,
                    name: 'Premium',

                    price: 2699,
                    "Storage": '20 CBM across UAE',
                    "Pick & Pack": 'Up to 600 Orders',
                    "Labeling": 'Included',
                    "Inventory Management": 'Included',
                    "Delivery & Returns": '+ AED 15/order',
                    "Cash On Delivery": '+ AED 5/order' 
                },
            ]
        }
    }
} 

export default plansMixins;