// I'm not sure if I understood the task correctly. If not, I would be happy to fix it.
// I haven't created React app for this task, so I assume that all needed functions 
// and types are imported from react.
// Also, the returned JSX in some sense is a pseudocode because I wanted to show roughly how I would do the task.
// A list of users is represented by an array of User objects.

// Questions I would ask a PM:
// 1) What's the goal of showing the list or what bigger task is this small task part of?
// 2) How the UI looks like in edge cases: no country selected/no users in selected country?
// 3) Is the list clickable, what should happen after the user clicks it?
// 4) Are there any additional features like hovercard?
// 5) How to fetch the list of countries and list of users (if they are not provided by props)?
// 6) What's the deadline?
// 7) Are tests needed?

type User = {
  readonly name: string;
  readonly country: string;
};

type Props = {
  readonly users: ReadonlyArray<User>;
};

export const FooComponent: FC = ({users}: Props) => {
  const [country, setCountry] = useState();

  const filteredUsers = useMemo(() => 
    users.filter((user) => user.country === country), [country]);

  return (
    <div>
      <div>
        <label>Choose a country: </label>
        <select onchange={setCountry(value)}>
          <option value="DE">Germany</option>
          <option value="UK">United Kingdom</option>
          <option value="KZ">Kazakhstan</option>
        </select>
      </div>
      <div>
        {filteredUsers.length > 0 ? (
          <ul>{filteredUsers.map((user, index) => (
            <li key={index}>
              {user.name}
            </li>
            ))}
          </ul>
          ) : (
            <div>No users</div>
          )
        }
      </div>
    </div>
  );
};