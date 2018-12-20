import React from "react";

import { LoginContext } from "components/contexts/user/LoginContext";

const withAuth = <P extends object>(ChildComponent: React.ComponentType<P>) => (props: any) => (
  <LoginContext.Consumer>
    {loginContext => <ChildComponent {...props} {...loginContext} />}
  </LoginContext.Consumer>
);
export default withAuth;
