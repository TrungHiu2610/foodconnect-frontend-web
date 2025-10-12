export default function AdminFooter() {
    return (
      <footer className="bg-dark text-white-50 mt-auto">
        <div className="container py-3 d-flex flex-wrap justify-content-between small">
          <div>© {new Date().getFullYear()} FoodConnect — Admin</div>
          <div className="d-flex gap-3">
            <a className="link-light link-opacity-75" href="#">Logs</a>
            <a className="link-light link-opacity-75" href="#">Status</a>
            <a className="link-light link-opacity-75" href="#">Docs</a>
          </div>
        </div>
      </footer>
    );
  }
  