import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";

export default function LogoutScreen() {
  const router = useRouter();

  useEffect(() => {
    // Here you could also clear any auth state / tokens if you had them.
    router.replace("/LoginPage");
  }, [router]);

  // Render nothing visible; user will be redirected immediately.
  return <View />;
}


