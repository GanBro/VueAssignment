// store/index.js
import { createStore } from 'vuex';

const store = createStore({
    state: {
        tickets: [
            {
                title: '旺季门票',
                price: '¥190',
                startDate: '执行日期：4月1日起',
                endDate: '截止日期：11月15日止'
            },
            {
                title: '旺季观光车票',
                price: '¥90',
                startDate: '执行日期：4月1日起',
                endDate: '截止日期：11月15日止'
            },
            {
                title: '淡季门票',
                price: '¥80',
                startDate: '执行日期：11月16日起',
                endDate: '截止日期：次年3月31日止'
            },
            {
                title: '淡季观光车票',
                price: '¥80',
                startDate: '执行日期：11月16日起',
                endDate: '截止日期：次年3月31日止'
            }
        ],
        newsList: [
            { title: '“粤”见九寨——2024年九寨沟推介活动在广州举行', date: '2024-06-18' },
            { title: '九寨沟最新发布并启动扎如沟研学旅游线路', date: '2024-06-17' },
            { title: '九寨沟国家级自然保护区圆满完成2570亩灾损生态创面修复实验性飞播造林', date: '2024-06-15' },
            { title: '保护世界遗产，建设美丽中国——九寨沟管理局代表荣获表彰', date: '2024-06-10' },
            { title: '2024年“文化和自然遗产日”九寨沟“专家说遗产”主题活动成功举办', date: '2024-06-08' },
            { title: '九寨沟工作站参加国教科文组织国际自然与文化遗产培训', date: '2024-06-05' },
            { title: '建标准 优服务 强管理 树品牌——九寨沟管理局举办标准化管理培训班', date: '2024-05-30' },
            { title: '践行生态文明，弘扬生态文化——九寨沟生态文化展览馆揭幕', date: '2024-05-25' },
            { title: '扬体育精神 展九寨风采——九寨沟管理局举办第十四届职工运动会', date: '2024-05-20' },
            { title: '九寨沟管理局组织开展“512”防灾减灾主题宣传活动', date: '2024-05-12' },
            { title: '九寨沟管理局受邀参加国教科文组织国际自然与文化遗产培训', date: '2024-05-09' },
            { title: '九寨沟景区圆满完成“五一”假期旅游接待工作', date: '2024-05-05' }
        ],
        announcements: [
            { title: '售罄通告', date: '2024-06-25' },
            { title: '“五一”假期票务预售情况通告', date: '2024-04-25' },
            { title: '九寨沟风景名胜区关于对劳动模范实行“五一”假期免门票的公告', date: '2024-04-20' },
            { title: '关于调整开园时间的通告', date: '2024-04-15' },
            { title: '九寨沟管理局关于“三八”妇女节实行优惠政策的公告', date: '2024-03-08' }
        ],
        visitorStats: [
            { title: '九寨沟景区共接待19051人次', date: '2024-06-21' },
            { title: '九寨沟景区共接待17874人次', date: '2024-06-20' },
            { title: '九寨沟景区共接待18432人次', date: '2024-06-19' },
            { title: '九寨沟景区共接待16858人次', date: '2024-06-18' },
            { title: '九寨沟景区共接待18301人次', date: '2024-06-17' }
        ],
        specialItems: [
            { title: '九寨沟世界自然遗产地APP', image: 'special1.png' },
            { title: '第十八届国际冰瀑旅游节', image: 'special2.png' },
            { title: '二十大专题', image: 'special3.png' },
            { title: '日寨文化节', image: 'special4.png' },
            { title: '阿坝州全域旅游', image: 'special5.png' },
            { title: '云游九寨实景景观直播', image: 'special6.png' },
            { title: '更多专题...', image: 'special7.png' },
            { title: '书记信箱', image: 'special8.png' },
            { title: '局长信箱', image: 'special9.png' },
            { title: '旅游咨询', image: 'special10.png' },
            { title: '旅游投诉', image: 'special11.png' },
            { title: '游客意见调查表', image: 'special12.png' },
            { title: '游客满意度调查', image: 'special13.png' }
        ]
    },
    getters: {
        allTickets(state) {
            return state.tickets;
        }
    }
});

export default store;
