import React from 'react'
import { Icon } from "@iconify/react";
import './css/app.min.css'
import './css/icons.min.css'
import './css/vendor.min.css'

function AdminPanel() {
  return (
    <div className="wrapper">
        <div className="page-content">

            <div className="container-fluid">

                <div className="row">
                      <div className="col-xl-12">
                          <div className="card">
                                <div className="card-header d-flex justify-content-between align-items-center gap-1">
                                    <h4 className="card-title flex-grow-1">All Product List</h4>

                                    <a href="product-add.html" className="btn btn-sm btn-primary">
                                          Add Product
                                    </a>

                                    <div className="dropdown">
                                          <a href="#" className="dropdown-toggle btn btn-sm btn-outline-light" data-bs-toggle="dropdown" aria-expanded="false">
                                              This Month
                                          </a>
                                          <div className="dropdown-menu dropdown-menu-end">
                                             
                                              <a href="#!" className="dropdown-item">Download</a>
                                             
                                              <a href="#!" className="dropdown-item">Export</a>
                                             
                                              <a href="#!" className="dropdown-item">Import</a>
                                          </div>
                                    </div>
                                </div>
                                <div>
                                    <div className="table-responsive">
                                          <table className="table align-middle mb-0 table-hover table-centered">
                                              <thead className="bg-light-subtle">
                                                    <tr>
                                                        <th style={{width: '20px'}}>
                                                              <div className="form-check ms-1">
                                                                  <input type="checkbox" className="form-check-input" id="customCheck1" />
                                                                  <label className="form-check-label" ></label>
                                                              </div>
                                                        </th>
                                                        <th>Product Name & Size</th>
                                                        <th>Price</th>
                                                        <th>Stock</th>
                                                        <th>Category</th>
                                                        <th>Rating</th>
                                                        <th>Action</th>
                                                    </tr>
                                              </thead>
                                              <tbody>
                                                    <tr>
                                                        <td>
                                                              <div className="form-check ms-1">
                                                                  <input type="checkbox" className="form-check-input" id="customCheck2" />
                                                                  <label className="form-check-label" >&nbsp;</label>
                                                              </div>
                                                        </td>
                                                        <td>
                                                              <div className="d-flex align-items-center gap-2">
                                                                  <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                                                                        <img src="/assets/images/product/p-1.png" alt="" className="avatar-md" />
                                                                  </div>
                                                                  <div>
                                                                        <a href="#!" className="text-dark fw-medium fs-15">Black T-shirt</a>
                                                                        <p className="text-muted mb-0 mt-1 fs-13"><span>Size : </span>S , M , L , Xl </p>
                                                                  </div>
                                                              </div>

                                                        </td>
                                                        <td>$80.00</td>
                                                        <td>
                                                              <p className="mb-1 text-muted"><span className="text-dark fw-medium">486 Item</span> Left</p>
                                                              <p className="mb-0 text-muted">155 Sold</p>
                                                        </td>
                                                        <td> Fashion</td>
                                                        <td> <span className="badge p-1 bg-light text-dark fs-12 me-1"><i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i> 4.5</span> 55 Review</td>
                                                        <td>
                                                              <div className="d-flex gap-2">
                                                                  <a href="#!" className="btn btn-light btn-sm"><Icon icon="solar:eye-broken"  className="align-middle fs-18"/> </a>
                                                                  <a href="#!" className="btn btn-soft-primary btn-sm"><Icon icon="solar:pen-2-broken"  className="align-middle fs-18"/> </a>
                                                                  <a href="#!" className="btn btn-soft-danger btn-sm"><Icon icon="solar:trash-bin-minimalistic-2-broken"  className="align-middle fs-18"/></a>
                                                              </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>
                                                              <div className="form-check ms-1">
                                                                  <input type="checkbox" className="form-check-input" id="customCheck2" />
                                                                  <label className="form-check-label">&nbsp;</label>
                                                              </div>
                                                        </td>
                                                        <td>
                                                              <div className="d-flex align-items-center gap-2">
                                                                  <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                                                                        <img src="/assets/images/product/p-3.png" alt="" className="avatar-md" />
                                                                  </div>
                                                                  <div>
                                                                        <a href="#!" className="text-dark fw-medium fs-15">Olive Green Leather Bag</a>
                                                                        <p className="text-muted mb-0 mt-1 fs-13"><span>Size : </span>S , M </p>
                                                                  </div>
                                                              </div>

                                                        </td>
                                                        <td>$136.00</td>
                                                        <td>
                                                              <p className="mb-1 text-muted"><span className="text-dark fw-medium">784 Item</span> Left</p>
                                                              <p className="mb-0 text-muted">674 Sold</p>
                                                        </td>
                                                        <td> Hand Bag</td>
                                                        <td> <span className="badge p-1 bg-light text-dark fs-12 me-1"><i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i> 4.1</span> 143 Review</td>
                                                        <td>
                                                             
                                                        <div className="d-flex gap-2">
                                                                  <a href="#!" className="btn btn-light btn-sm"><Icon icon="solar:eye-broken"  className="align-middle fs-18"/> </a>
                                                                  <a href="#!" className="btn btn-soft-primary btn-sm"><Icon icon="solar:pen-2-broken"  className="align-middle fs-18"/> </a>
                                                                  <a href="#!" className="btn btn-soft-danger btn-sm"><Icon icon="solar:trash-bin-minimalistic-2-broken"  className="align-middle fs-18"/></a>
                                                              </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td>
                                                              <div className="form-check ms-1">
                                                                  <input type="checkbox" className="form-check-input" id="customCheck2" />
                                                                  <label className="form-check-label" >&nbsp;</label>
                                                              </div>
                                                        </td>
                                                        <td>
                                                              <div className="d-flex align-items-center gap-2">
                                                                  <div className="rounded bg-light avatar-md d-flex align-items-center justify-content-center">
                                                                        <img src="/assets/images/product/p-3.png" alt="" className="avatar-md" />
                                                                  </div>
                                                                  <div>
                                                                        <a href="#!" className="text-dark fw-medium fs-15">Women Golden Dress</a>
                                                                        <p className="text-muted mb-0 mt-1 fs-13"><span>Size : </span>S , M </p>
                                                                  </div>
                                                              </div>

                                                        </td>
                                                        <td>$219.00</td>
                                                        <td>
                                                              <p className="mb-1 text-muted"><span className="text-dark fw-medium">769 Item</span> Left</p>
                                                              <p className="mb-0 text-muted">180 Sold</p>
                                                        </td>
                                                        <td> Fashion</td>
                                                        <td> <span className="badge p-1 bg-light text-dark fs-12 me-1"><i className="bx bxs-star align-text-top fs-14 text-warning me-1"></i> 4.4</span> 174 Review</td>
                                                        <td>
                                                             
                                                        <div className="d-flex gap-2">
                                                                  <a href="#!" className="btn btn-light btn-sm"><Icon icon="solar:eye-broken"  className="align-middle fs-18"/> </a>
                                                                  <a href="#!" className="btn btn-soft-primary btn-sm"><Icon icon="solar:pen-2-broken"  className="align-middle fs-18"/> </a>
                                                                  <a href="#!" className="btn btn-soft-danger btn-sm"><Icon icon="solar:trash-bin-minimalistic-2-broken"  className="align-middle fs-18"/></a>
                                                              </div>
                                                        </td>
                                                    </tr>


                                              </tbody>
                                          </table>
                                    </div>
                              
                                </div>
                                <div className="card-footer border-top">
                                    <nav aria-label="Page navigation example">
                                          <ul className="pagination justify-content-end mb-0">
                                              <li className="page-item"><a className="page-link" href="javascript:void(0);">Previous</a></li>
                                              <li className="page-item active"><a className="page-link" href="javascript:void(0);">1</a></li>
                                              <li className="page-item"><a className="page-link" href="javascript:void(0);">2</a></li>
                                              <li className="page-item"><a className="page-link" href="javascript:void(0);">3</a></li>
                                              <li className="page-item"><a className="page-link" href="javascript:void(0);">Next</a></li>
                                          </ul>
                                    </nav>
                                </div>
                          </div>
                      </div>

                </div>

            </div>
        </div>
    </div>
  )
}

export default AdminPanel