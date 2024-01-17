const barChart = ({oldPurchases}) => {

    const oldPurchases = anyOldPurchases.column();

    //надписи к осям
    oldPurchases.xAxis().title("")
    oldPurchases.yAxis().title("")

    //название графика
    oldPurchases.title("График трат")

    //настройка контейнера
    oldPurchases.container("container")

    oldPurchases.draw()

    return (
        <div id="container" className="w-full h-full m-0 p-0"></div>
    )
}

export default barChart