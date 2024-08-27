
export interface Route {
    path: string;
    element: React.ReactNode;
    protected?: boolean;
}

export interface ProtectedRouteProps {
    element: React.ReactNode;
}
