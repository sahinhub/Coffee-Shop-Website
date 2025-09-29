import React, { useState } from 'react';
import { FaPencil, FaTrashCan } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Users = () => {

    const loadedUsers = useLoaderData();
    const [users,setUsers]=useState(loadedUsers);
    console.log(loadedUsers);
    const handleEditButton = (id) => {
        console.log(id);

        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    fetch(`https://mongo-coffee-shop-server.vercel.app/delete/user/${id}`,{
        method:"DELETE"
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        if(data.deletedCount){

            const remainingUsers=users.filter(user=>user._id!==id);
            setUsers(remainingUsers)

            Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
        }
    })
  }
});

    }
    return (
        <div className='py-10 container mx-auto text-center'>
            <h3>Total Users: {loadedUsers.length}</h3>
            <div className="overflow-x-auto rounded-box border border-gray-200 shadow">
                <table className="table">
                    {/* head */}
                    <thead className='bg-base-100 text-base font-normal'>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Last SignIn</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, idx) =>
                                <tr key={user._id} className=''>
                                    <th className='border-t border-t-gray-400'>{idx + 1}</th>
                                    <td className='border-t border-t-gray-400'>{user.name}</td>
                                    <td className='border-t border-t-gray-400'>{user.email}</td>
                                    <td className='border-t border-t-gray-400'>{user.userLastSignIn}</td>
                                    <td className='border-t border-t-gray-400 '><FaTrashCan onClick={() => handleEditButton(user._id)} className='text-xl cursor-pointer hover:text-red-600 transition-colors duration-300' ></FaTrashCan>
                                    </td>
                                </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;