import React from "react";

const Login = ({ setShowLogin }) => {
  const dialogRef = React.useRef(null);
  const id = React.useId();
  const [state, setState] = React.useState("login");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  React.useLayoutEffect(() => {
    const dialog = dialogRef.current;
    dialog.showModal();
    return () => dialog.close();
  }, []);

  const closeDialog = () => {
    dialogRef.current.close();
    setShowLogin(false);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  const handleTab = (event) => {
    if (event.key !== "Tab") return;

    const controls = event.currentTarget.querySelectorAll(
      "button:enabled, input:enabled",
    );
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && event.target === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && event.target === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={`${id}-title`}
      onCancel={(event) => {
        event.preventDefault();
        closeDialog();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) closeDialog();
      }}
      onKeyDown={handleTab}
      className="m-auto w-80 max-w-[calc(100%_-_2rem)] rounded-lg bg-white sm:w-88 text-sm text-gray-600 backdrop:bg-black/50"
    >
      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-4 m-auto items-start p-8 py-12 w-full text-gray-500 rounded-lg shadow-xl border border-gray-200 bg-white"
      >
        <button
          type="button"
          className="self-end text-primary cursor-pointer"
          onClick={closeDialog}
        >
          Close
        </button>
        <h2 id={`${id}-title`} className="text-2xl font-medium m-auto">
          <span className="text-primary">User</span>{" "}
          {state === "login" ? "Login" : "Sign Up"}
        </h2>
        {state === "register" && (
          <div className="w-full">
            <label htmlFor={`${id}-name`}>Name</label>
            <input
              id={`${id}-name`}
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="type here"
              className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
              type="text"
              required
            />
          </div>
        )}
        <div className="w-full ">
          <label htmlFor={`${id}-email`}>Email</label>
          <input
            id={`${id}-email`}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="type here"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
            type="email"
            required
          />
        </div>
        <div className="w-full ">
          <label htmlFor={`${id}-password`}>Password</label>
          <input
            id={`${id}-password`}
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="type here"
            className="border border-gray-200 rounded w-full p-2 mt-1 outline-primary"
            type="password"
            required
          />
        </div>
        {state === "register" ? (
          <p>
            Already have account?{" "}
            <button
              type="button"
              onClick={() => setState("login")}
              className="text-primary cursor-pointer"
            >
              Log in
            </button>
          </p>
        ) : (
          <p>
            Create an account?{" "}
            <button
              type="button"
              onClick={() => setState("register")}
              className="text-primary cursor-pointer"
            >
              Sign up
            </button>
          </p>
        )}
        <p>Login and account creation are currently unavailable.</p>
        <button
          type="submit"
          disabled
          className="bg-primary text-white w-full py-2 rounded-md opacity-50 cursor-not-allowed"
        >
          {state === "register" ? "Create Account" : "Login"}
        </button>
      </form>
    </dialog>
  );
};

export default Login;
