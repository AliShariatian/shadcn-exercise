import { FC } from "react";
import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/base/alert";

const AlertExample: FC = (): JSX.Element => {
  return (
    <Alert variant="default">
      <Terminal className="size-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        <p>You can add components and dependencies to your app using the cli.</p>
      </AlertDescription>
    </Alert>
  );
};

export default AlertExample;
