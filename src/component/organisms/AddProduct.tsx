import React, { useEffect, useState } from 'react'
import { ICategory } from '../../model/ICategory';

function AddProduct() {
  const [categories, setCategories] = useState<ICategory[]>();
  
  useEffect(()=>{
    fetch('http://localhost:9090/category/get-all').then(res=>res.json()).then(r=>setCategories(r.data))
  },[])
  return (
    <div className="col-xl-12">
        <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center gap-1">
                <h4>Add Product</h4>
            </div>
            <div>
                <div className="row">
                    <div className="col p-3">
                        <div className="mb-3">
                            <label className="form-label"> Kategori Seçiniz</label>
                            <select className='form-control'>
                                <option>Lütfen Seçiniz</option>
                                {
                                    categories?.map(c=>{
                                        return <option value={c.id}>{c.categoryName}</option>
                                    })
                                }
                                
                            </select>
                        </div>
                        <div className="mb-3">
                            <label className="form-label"> Ürün Adı</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label"> Fiyat</label>
                            <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label"> Stok Miktarı</label>
                            <input type="text" className="form-control" />
                        </div>
                    </div>
                    <div className="col p-3">
                    <div className="mb-3">
                                <label className="form-label"> Tumpnail URL</label>
                                <input type="text" className="form-control" />
                        </div>
                        <div className="mb-3">
                                <label className="form-label"> Resim Listesi</label>
                                <textarea rows={3} className="form-control" />
                        </div>
                        <div className="mb-3">
                                <label className="form-label"> Boyut Listesi</label>
                                
                        </div>
                    </div>
                </div>
            </div>
            <div className="card-footer border-top">

            </div>
        </div>
    </div>
  )
}

export default AddProduct