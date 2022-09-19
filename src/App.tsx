import "./index.css";

export const App = () => {
  return (
    <>
      <h1 className="cs-color_red">
        React TypeScript Webpack Starter Template {process.env.NODE_ENV}{" "}
        {process.env.name}
      </h1>
    </>
  );
};
