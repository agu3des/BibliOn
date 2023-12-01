import { formatCurrency} from '@/lib/format';

export default function BooksCards({
    id,
    name,
    value,
    autor,
    editora,
  }) {
  return  ( 
    <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg p-4">{id}
    <div className="flex justify-between menor">
      <p>
        <img className="foto" src="${books.image}" width="100px" />
      </p>
      <div className="flex-col">
        <h3 className="p-2 mt-4 text-lg font-semibold text-gray-700 dark:text-white">{name}
        </h3>
        <p className="p-2 text-sm text-gray-500 dark:text-white">
          <span className="font-bold">Preço:</span>{formatCurrency(value)}
        </p>
        <p className="p-2 text-sm text-gray-500 dark:text-white">
          <span className="font-bold">Autor(a):</span>{autor}
        </p>
        <p className="p-2 text-sm text-gray-500 dark:text-white">
          <span className="font-bold">Editora:</span>{editora}
        </p>
      </div>
    </div>
  </div>
  );
}