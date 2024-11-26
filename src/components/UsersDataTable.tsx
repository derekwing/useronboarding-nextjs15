import { UserInfo } from "@/lib/types";

type Props = { users: UserInfo[] };

export default function UsersDataTable({ users }: Props) {
  return (
    <table className="table-auto border-collapse border border-gray-300 w-full text-left">
      <thead>
        <tr>
          <th className="border border-gray-300 px-4 py-2">Bio</th>
          <th className="border border-gray-300 px-4 py-2">Address</th>
          <th className="border border-gray-300 px-4 py-2">City</th>
          <th className="border border-gray-300 px-4 py-2">State</th>
          <th className="border border-gray-300 px-4 py-2">Zipcode</th>
          <th className="border border-gray-300 px-4 py-2">Birthdate</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={index}>
            <td className="border border-gray-300 px-4 py-2">{user.bio}</td>
            <td className="border border-gray-300 px-4 py-2">{user.address}</td>
            <td className="border border-gray-300 px-4 py-2">{user.city}</td>
            <td className="border border-gray-300 px-4 py-2">{user.state}</td>
            <td className="border border-gray-300 px-4 py-2">{user.zipcode}</td>
            <td className="border border-gray-300 px-4 py-2">
              {user.birthmonth}/{user.birthdate}/{user.birthyear}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
