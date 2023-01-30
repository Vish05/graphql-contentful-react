import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { gql } from 'graphql-request';
import LoadingSpinner from '../../shared/components/UIElement/LoadingSpinner';
import useGraphqlRequest from "../../shared/hooks/useGraphqlRequest"
import ICategory from "../../types/categories"

export default function ProductCategory() {

    const [categories, setCategories] = useState([]);

    const query = gql`{
        categoriesCollection {
            items {
                sys {
                    id
                }
                name,
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
                setCategories(response.categoriesCollection.items);
            }
        });
    }, [getGraphQlData]);

    return (
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {categories.length > 0 ? (
                <React.Fragment>
                    {categories.map((category: ICategory) => (
                        <div className="col mb-5" key={category.sys.id}>
                            <div className="card h-100">
                                <Link to={`products/${category.sys.id}`}>
                                    <img className="card-img-top" src={category.images.url} alt={category.name} />
                                </Link>
                                <div className="card-body p-4">
                                    <div className="text-center">
                                        <h5 className="fw-bolder">{category.name}</h5>
                                    </div>
                                </div>
                                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                    <div className="text-center">
                                        <Link className="btn btn-outline-dark mt-auto" to="/shop">
                                            View Products
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </React.Fragment>
            ) : (
                <LoadingSpinner />
            )
            }
        </div >
    )
}
