
type Props = {
    pagesArray: number[],
    page: number,
    changePage: (page: number) => void,
}

const Pagination = ({pagesArray, page, changePage}: Props) => {
    return (
        <div className="page__wrapper">
            {pagesArray.map((p) => (
                <span key={p}
                      onClick={() => changePage(p)}
                      className={page === p ? 'page page__current' : 'page'}>{p}</span>
            ))}
        </div>
    );
};

export default Pagination;