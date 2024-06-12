import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            landmarks: [
                { id: 1, name: '标志景点 1', description: '标志景点 1 的描述' },
                { id: 2, name: '标志景点 2', description: '标志景点 2 的描述' },
                { id: 3, name: '标志景点 3', description: '标志景点 3 的描述' },
                { id: 4, name: '标志景点 4', description: '标志景点 4 的描述' },
                { id: 5, name: '标志景点 5', description: '标志景点 5 的描述' },
                { id: 6, name: '标志景点 6', description: '标志景点 6 的描述' },
            ],
            events: [
                { id: 1, name: '活动 1', details: '活动 1 的详情' },
                { id: 2, name: '活动 2', details: '活动 2 的详情' },
            ],
            guides: [
                { id: 1, name: '指南 1', content: '指南 1 的内容' },
                { id: 2, name: '指南 2', content: '指南 2 的内容' },
            ],
            // other state variables as needed
        };
    },
    getters: {
        getLandmarkById: (state) => (id) => {
            return state.landmarks.find(landmark => landmark.id === id);
        },
        getEventById: (state) => (id) => {
            return state.events.find(event => event.id === id);
        },
        getGuideById: (state) => (id) => {
            return state.guides.find(guide => guide.id === id);
        },
        // other getters as needed
    }
});

export default store;
