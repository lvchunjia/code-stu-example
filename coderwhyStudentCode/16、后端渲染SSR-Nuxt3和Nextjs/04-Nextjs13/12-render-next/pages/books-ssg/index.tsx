import { memo, ReactElement } from "react";
import type { FC } from "react";
import { fetchBooks } from "../../service/home";
export interface IProps {
  children?: ReactElement;
  books?: any[];
}
const BooksSSG: FC<IProps> = memo(function (props) {
  const { children, books } = props;
  return (
    <div className="home">
      <div>BooksSSG</div>
      <ul>
        {books?.map((item) => {
          return <li key={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
});
export default BooksSSG;
BooksSSG.displayName = "BooksSSG"; // 方便以后调试用的

export async function getStaticProps(context: any) {
  let count = Math.floor(Math.random() * 10 + 1);
  const res = await fetchBooks(count);
  return {
    props: {
      books: res.data.books,
    },
  };
}
