import React from 'react'
import './product.css'
import { Link } from 'react-router-dom'
import Chart from '../../chart/Chart'
import { productData } from '../../dummyData'
import { Publish } from '@material-ui/icons'


export default function Product() {
    return (
        <div className='product'>
            <div className="productTitleContainer">
                <h1 className="productTitle">Product</h1>
                <Link to='newproduct'>
                    <button className="productAddButton">Create</button>
                </Link>
            </div>
            <div className="productTop">
                <div className="productTopLeft">
                    <Chart data={productData} dataKey="Sales" title="Sales Performance " />
                </div>
                <div className="productTopRight">
                    <div className="productInfoTop">
                        <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1548193493-LeafNeonTableLamp.jpg?crop=1xw:1.00xh;center,top&resize=480:*" alt="nice thing" className="productInfoImg" />
                        <span className='productName'>Neon light leaf thing</span>
                    </div>
                    <div className="productInfoBottom">
                        <div className="productInfoItem">
                            <span className="productInfoKey">ID:</span>
                            <span className="productInfoValue">1234</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Sales:</span>
                            <span className="productInfoValue">4344</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">Active:</span>
                            <span className="productInfoValue">Yes</span>
                        </div>
                        <div className="productInfoItem">
                            <span className="productInfoKey">In stock:</span>
                            <span className="productInfoValue">No</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="productBottom">
                <form className="productForm">
                    <div className="productFormLeft">
                        <label>Product Name</label>
                        <input type='text' placeholder='Plant thing' />
                        <label>In stock</label>
                        <select name='inStock' id='inStock'>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                        <label>Active</label>
                        <select name='active' id='active'>
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>
                    </div>
                    <div className="productFormRight">
                        <div className="productUpload">
                            <img src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1548193493-LeafNeonTableLamp.jpg?crop=1xw:1.00xh;center,top&resize=480:*" alt="nice" className="productUploadImg" />
                            <label for='file'>
                                <Publish />
                            </label>
                            <input type='file' id='file' style={{ display: "none" }} />
                        </div>

                        <button className="productButton">Update</button>

                    </div>
                </form>
            </div>
        </div>
    )
}
