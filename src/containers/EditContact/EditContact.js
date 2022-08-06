// import React, {useEffect, useState} from 'react';
// import {useDispatch, useSelector} from "react-redux";
// import {useHistory, useRouteMatch} from "react-router-dom";
// import Spinner from "../../components/UI/Spinner/Spinner";
// import {Button} from "@mui/material";
//
// const EditDish = () => {
//     const dispatch = useDispatch();
//     const eachDish = useSelector(state => state.editDish.dish);
//     const loading = useSelector(state => state.editDish.loading);
//     const history = useHistory();
//     const match = useRouteMatch();
//
//     useEffect(() => {
//         dispatch(getDish(match.params.id));
//     }, [dispatch, match.params.id]);
//
//     useEffect(() => {
//         setDish(eachDish);
//     }, [eachDish]);
//
//     const [dish, setDish] = useState(eachDish || {
//         title: '',
//         price: '',
//         image: '',
//     });
//
//     const onInputChange = (e) => {
//         const {name, value} = e.target;
//
//         setDish(prev => ({
//             ...prev,
//             [name]: value,
//         }));
//     };
//
//     const onSubmitHandler = async e => {
//         e.preventDefault();
//         await dispatch(putDish(match.params.id, dish));
//         history.push('/');
//     };
//
//
//     return loading ? (<Spinner/>) : dish && (
//
//         <form onSubmit={onSubmitHandler}>
//             <input
//                 type="text"
//                 className="Input"
//                 name="title"
//                 value={dish.title}
//                 onChange={onInputChange}
//                 placeholder="Title"
//             />
//             <input
//                 type="number"
//                 className="Input"
//                 name="price"
//                 value={dish.price}
//                 onChange={onInputChange}
//                 placeholder="Price"
//             />
//             <input
//                 type="text"
//                 className="Input"
//                 name="image"
//                 value={dish.image}
//                 onChange={onInputChange}
//                 placeholder="Image Link"
//             />
//             <Button className='btn-edit' variant="contained" type='submit'>Edit Dish</Button>
//         </form>
//     );
// };
//
// export default EditDish;