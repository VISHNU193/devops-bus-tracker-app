
import { SignIn } from '@clerk/clerk-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container flex items-center justify-center min-h-screen mx-auto px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center space-y-2">
          <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Sign in to your BusTracker account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <SignIn
            routing="path"
            path="/login"
            signUpUrl="/signup"
            appearance={{
              elements: {
                rootBox: 'w-full',
                card: 'shadow-none border-0 w-full',
                headerTitle: 'text-xl font-semibold',
                headerSubtitle: 'text-sm text-gray-600',
                socialButtonsBlockButton: 'border-gray-300 hover:bg-gray-50',
                socialButtonsBlockButtonText: 'font-medium',
                dividerLine: 'bg-gray-200',
                dividerText: 'text-gray-500',
                formFieldLabel: 'text-sm font-medium text-gray-700',
                formFieldInput: 'border-gray-300 focus:ring-2 focus:ring-bus-primary focus:border-transparent',
                formButtonPrimary: 'bg-bus-primary hover:bg-bus-primary/90 text-sm normal-case',
                footerActionText: 'text-sm text-gray-600',
                footerActionLink: 'text-bus-primary hover:text-bus-primary/80 font-medium',
              },
            }}
          />
          <div className="text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-bus-primary hover:text-bus-primary/80">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
