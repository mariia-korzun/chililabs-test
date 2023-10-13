import { ListItem } from '@/components';
import { Products } from '@/common/types';

type IProps = {
  items: Products;
};

const List = ({ items }: IProps) => {
  return (
    <div className="p-5 min-h-[300px]">
      {items.length > 0 ? (
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-5" data-testid="list-element">
          {items.map((item) => {
            return (
              <li key={item.id}>
                <ListItem item={item} />
              </li>
            );
          })}
        </ul>
      ) : (
        <div data-testid="list-empty-message-element">There are no such products</div>
      )}
    </div>
  );
};

export default List;
