import ajax from '../../utils/http'
import { hashHistory } from 'react-router'
import { Toast } from 'antd-mobile';
import qs from 'qs'

const URL_GET_TBL_LIST = `/manager/gateway`


export default {
    get_tbl_list () {
        return new Promise((resolve, reject) => {
            console.log(URL_GET_TBL_LIST)
            ajax.get(URL_GET_TBL_LIST)
                .then(res => {
                    // if (res.status === 200 && res.data) {
                    //     var data = res.data;
                    //     resolve({
                    //         errCode: data.errCode,
                    //         data: data.data,
                    //         errMessage: data.errMessage
                    //     })
                    // } else {
                    //     throw new Error(res.description)
                    // }
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    sayHelle () {
        const path = `/homepage`
        hashHistory.push(path);
        
        // Toast.success('Load success !!!', 3);
        // window.redcore.login(getState().home.userName, getState().home.password, function (res) {
        //     if (res.status === 200 && res.data) {
        //         const path = `/homepage`
		//         hashHistory.push(path);
        //     } else {
        //         Toast.success('Load success !!!', 3);
        //     }
        // });
        
        // console.log('say hello');
    }
}
