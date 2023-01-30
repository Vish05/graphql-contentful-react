import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { gql } from 'graphql-request';
import LoadingSpinner from '../../shared/components/UIElement/LoadingSpinner';
import useGraphqlRequest from "../../shared/hooks/useGraphqlRequest"
import IProduct from "../../types/products"


export default function ProductList() {
    const [products, setProducts] = useState([]);

    const query = gql`{
        productsCollection {
            items {
                sys {
                    id
                }
                title,
                slug,
                price,
                originalPrice,
                images {
                    url
                }
            }
        }
    }`

    const { getGraphQlData } = useGraphqlRequest(query);

    useEffect(() => {
        getGraphQlData().then((response) => {
            if (response) {
                setProducts(response.productsCollection.items);
            }
        });
    }, [getGraphQlData]);

    return (
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {products.length > 0 ? (
                <React.Fragment>
                    {products.map((product: IProduct) => (
                        <div className="col mb-5" key={product.sys.id}>
                            <div className="card h-100">
                                <Link to={`products/${product.sys.id}`}>
                                    <img className="card-img-top" src={product.images.url} alt={product.title} />
                                </Link>
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">{product.title}</h5>
                                        <span className="text-muted text-decoration-line-through">${product.originalPrice}</span>
                                        ${product.price}
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <Link className="btn btn-outline-dark mt-auto" to={`products/${product.sys.id}`}>
                                            View options
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </React.Fragment>
            ) : (
                <LoadingSpinner />
            )}
        </div>
    )
}
