export default [
    {
        path: 'orders',
        name: 'Orders',
        component: () => import('@/views/order/OrdersTab.vue'),
    },
    {
        path: 'orders/:id',
        name: 'Order',
        component: () => import('@/views/order/Order.vue'),
    }
]