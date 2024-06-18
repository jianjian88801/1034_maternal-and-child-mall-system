const base = {
    get() {
                return {
            url : "http://localhost:8080/muyingshangcheng/",
            name: "muyingshangcheng",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/muyingshangcheng/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "母婴商城系统"
        } 
    }
}
export default base
