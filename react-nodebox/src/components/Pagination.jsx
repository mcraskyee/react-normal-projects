const Pagination = ({ paginate, postsPerPage, currentPage, totalPosts }) => {
  // calculate and display page number
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li key={number} className="page-item">
            <a
              // 传值是要写成遍历，不能直接写函数，否则它会一直call函数
              onClick={() => paginate(number)}
              href="#"
              className={`page-link ${
                currentPage === number ? "active-page" : ""
              }`}
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
