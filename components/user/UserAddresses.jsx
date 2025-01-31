import Link from "next/link";
import React from "react";

const UserAddresses = ({ addresses }) => {
  return addresses?.map((address) => (
    <Link href={`/address/${address._id}`} key={address._id}>
      <div className="mb-5 gap-4">
        <figure className="w-full flex align-center bg-gray-100 p-4 rounded-md cursor-pointer">
          <figcaption className="text-gray-600">
            <p>
            {address.city}, {address.state} <br /> {address.street}, {" "}
              {address.zipCode}, {address.country}
              <br />
              Номер телефона: {address.phoneNo}
            </p>
          </figcaption>
        </figure>
      </div>
    </Link>
  ));
};

export default UserAddresses;