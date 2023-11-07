import { createRouter, createWebHistory } from "vue-router";
import InteractiveElements from './components/InteractiveElements.vue';
// import VisualInteractionSelector from './components/VisualSelector.vue';
const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: InteractiveElements },
        // { path: '/dashboard', component: VisualInteractionSelector }
    ]
})
export default router