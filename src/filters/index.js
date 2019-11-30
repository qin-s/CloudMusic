class Tools {
    static date(v){
        const date = new Date(v);
        return date.getFullYear()+"-"
            + (date.getMonth()+1).toString().padStart(2,0) + "-"
            +date.getDate().toString().padStart(2,0) + " "
            +date.getHours().toString().padStart(2,0) + ":"
            +date.getMinutes().toString().padStart(2,0) + ":"
            +date.getSeconds().toString().padStart(2,0);
    }
    static daymonth(v){
        const date = new Date(v);
        return  (date.getMonth()+1).toString().padStart(2,0) +"/"+ date.getDate().toString().padStart(2,0)

    }
    static artists(v){
        return v+"123"
    }
    static price(v){
        return "￥"+v.toFixed(2);
    }
    //视频时长
    static durationms(v){
        let minutes = parseInt((v % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2,0);
        let seconds = parseInt(((v % (1000 * 60)) / 1000)).toString().padStart(2,0);
        return  minutes + " :" + seconds;
    }
    //播放量
    static playTime(v){
        
        let count = parseInt(Number(v)/10000);
        return count
    }
}
export default Tools