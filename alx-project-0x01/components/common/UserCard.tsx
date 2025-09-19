import { UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
  name,
  email,
  phone,
  website,
  company,
  address,
}) => {
  return (
    <div className="max-w-sm mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-bold text-gray-800">{name}</h2>
      <p className="text-gray-600">{email}</p>
      <p className="text-gray-600">{phone}</p>
      <p className="text-blue-500 hover:underline">{website}</p>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700">Company</h3>
        <p className="text-gray-600">{company.name}</p>
        <p className="text-sm text-gray-500 italic">{company.catchPhrase}</p>
      </div>

      <div className="mt-4">
        <h3 className="font-semibold text-gray-700">Address</h3>
        <p className="text-gray-600">
          {address.street}, {address.suite}, {address.city}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
