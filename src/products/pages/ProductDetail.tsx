import React, { useEffect, useState } from 'react';
import { gql } from 'graphql-request';
import { useParams } from 'react-router-dom'; // importing the hook
import useGraphqlRequest from "../../shared/hooks/useGraphqlRequest"
import IProduct from "../../types/products"

export default function ProductDetail() {

    const [product, setProduct] = useState<IProduct | undefined>();;
    let params = useParams();


    const query = gql`{
        products(id: "${params.id}") {
            title,
            slug,
            shortDescription,
            price,
            originalPrice,
            images {
                url
            },
            categories {
                name
            },
            inventory {
                quantity
            }
        }
    }`

    const { getGraphQlData } = useGraphqlRequest(query);

    useEffect(() => {
        getGraphQlData().then((response) => {
            if (response) {
                setProduct(response.products);
            }
        });
    }, [getGraphQlData]);

    return (
        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                    <div className="col-md-6">
                        <img className="card-img-top mb-5 mb-md-0" src={product?.images.url} alt={product?.title} />
                    </div>
                    <div className="col-md-6">
                        <div className="small mb-1">Category: {product?.categories.name}</div>
                        <h1 className="display-5 fw-bolder">{product?.title}</h1>
                        <div className="fs-5 mb-5">
                            <span className="text-decoration-line-through">${product?.originalPrice}</span>
                            <span>${product?.price}</span>
                        </div>
                        <p className="lead">
                            {product?.shortDescription}
                        </p>
                        <p className="lead">
                            Only {product?.inventory.quantity} items are available
                        </p>
                        <div className="d-flex">
                            <input className="form-control text-center me-3 input-width" id="inputQuantity" type="num" value="1" />
                            <button className="btn btn-outline-dark flex-shrink-0" type="button">
                                <i className="bi-cart-fill me-1"></i>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
