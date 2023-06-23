import TableRow from "./TableRow";

const Table = ({ dataSources }) => {
  return (
    <div className="col-span-12 mt-5">
      <div className="grid gap-2 grid-cols-1 lg:grid-cols-1">
        <div className="bg-white p-4 shadow-lg rounded-lg">
          <h1 className="font-bold text-base">Table</h1>
          <div className="mt-4">
            <div className="flex flex-col">
              <div className="-my-2 overflow-x-auto">
                <div className="py-2 align-middle inline-block min-w-full">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg bg-white">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead>
                        <tr>
                          <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            <div className="flex cursor-pointer">
                              <span className="mr-2">PROJECT NAME</span>
                            </div>
                          </th>
                          <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            <div className="flex cursor-pointer">
                              <span className="mr-2">Stock</span>
                            </div>
                          </th>
                          <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            <div className="flex cursor-pointer">
                              <span className="mr-2">STATUS</span>
                            </div>
                          </th>
                          <th className="px-6 py-3 bg-gray-50 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                            <div className="flex cursor-pointer">
                              <span className="mr-2">ACTION</span>
                            </div>
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {dataSources.map((record, index) => {
                          return (
                            <TableRow
                              record={record}
                              key={"dashboard-item" + index}
                            />
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
