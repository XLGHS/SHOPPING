//mutations里面定义的方法是用来修改state
import { MessageBox } from 'mint-ui';
import { Toast } from 'mint-ui';
const mutations = {
    addNum(state) {
        console.log(state);
        ++state.num
    },
    addNumX(state, data) {
        console.log(state);
        state.num = state.num + data
    },
    getCategoryDatas(state, data) {
        state.catetoryDatas = data
    },
    getSwipeDatas(state, data) {
        state.swipeDatas = data
    },
    getUserInfo(state, data) {
        state.userInfo = data
    },
    getGoodsList(state, data) {
        state.goodsLists = data
    },
    getGoodsDetails(state, data) {
        state.goodsDetails = data
    },
    // 设置购物车中的数据
    setCartDatas(state, data) {
        console.log(data);
        if (data) {
            state.carts.push(data)

        }
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    //++
    addCart(state, index) {
        console.log(state.carts[index]);
        state.carts[index].value++;
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    //--
    ddaCart(state, index) {
        if (state.carts[index].value == 1) {
            state.carts[index].value = 1

            Toast('商品数量不能少于1哦！');
        } else {
            state.carts[index].value--
        }
        console.log(state.carts[index]);
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    //删除
    dele(state, index) {
        MessageBox.confirm('亲,您确定要放弃吗？').then(() => {
            state.carts.splice(index, 1)
            localStorage.setItem("carts", JSON.stringify(state.carts))
        }, () => {
            console.log("取消了");
        });
    },
    //输入

    changeValue(state, index) {
        console.log(state.carts[index].value);
        if (state.carts[index].value < 1) {
            state.carts[index].value = 1
            Toast('商品数量不能少于1哦！');
        } else if (/^0/.test(state.carts[index].value)) {
            state.carts[index].value = 1
        } else {
            state.carts[index].value
            console.log(state.carts[index].value);
        }
        console.log(state.carts[index]);
        localStorage.setItem("carts", JSON.stringify(state.carts))
    },

    //选中
    changeSelect(state, cart) {
        state.carts.isSelect = cart.isSelect
            //全选状态
        let isCheck = state.carts.every((item) => {
            return item.isSelect == true
        })
        console.log(isCheck);
        state.checkAll = isCheck
        localStorage.setItem("checkAll", state.checkAll)


        localStorage.setItem("carts", JSON.stringify(state.carts))
    },
    //全选方法
    selectAllFn(state) {
        console.log(state.checkAll);
        state.carts.forEach((item) => {
            item.isSelect = state.checkAll
        });
        console.log(123);
        localStorage.setItem("carts", JSON.stringify(state.carts))
        localStorage.setItem("checkAll", state.checkAll)
    },
    //搜索的页面
    searchKeywords(state, data) {
        state.searchList = data
    },
}

export default mutations