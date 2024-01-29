import FormForAddNewPurchase from "components/FormForAddNewPurchase";

const LastPurchases = ({
  addPurchases,
  oldPurchases,
  deletePurchase,
  generalExpenses,
}) => {
  return (
    <div className="gap-y-4 flex flex-col m-auto max-w-5xl">
      <p className="text-center text-5xl mt-10 text-purple-600">
        Общая сумма: {generalExpenses} руб.
      </p>

      <FormForAddNewPurchase addPurchases={addPurchases} />
      <div className="bg-gray-100 flex flex-wrap justify-start mt-6">
        {oldPurchases.map((purchase) => [
          <div key={purchase.id} className="flex w-1/4 p-4 ">
            <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl">
              <div className="p-5">
                <p className="mb-2 font-bold">{purchase.category}</p>
                <p className="text-sm leading-5 text-gray-900">
                  {purchase.date}
                </p>
                <p className="text-sm leading-5 text-gray-900">
                  {purchase.cash} руб.
                </p>
              </div>
              <button
                className="px-4 py-2 text-white bg-purple-600 duration-150 hover:bg-purple-400 active:bg-purple-200"
                onClick={() => deletePurchase(purchase.id)}
              >
                Удалить
              </button>
            </div>
          </div>,
        ])}
      </div>
    </div>
  );
};

export default LastPurchases;
