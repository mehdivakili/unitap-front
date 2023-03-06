import React, { createContext, PropsWithChildren, useCallback, useEffect, useState } from "react";
import { createUserProfile, getUserProfile } from "api";
import { UserProfile } from "types";
import { useWeb3React } from "@web3-react/core";

export const UserProfileContext = createContext<{
  userProfile: UserProfile | null;
  refreshUserProfile: ((signature: string) => Promise<UserProfile>) | null;
  loading: boolean;
}>({ userProfile: null, refreshUserProfile: null, loading: false });

export function UserProfileProvider({ children }: PropsWithChildren<{}>) {
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const { account } = useWeb3React();
  const [loading, setLoading] = useState(false);

  const refreshUserProfile = async (signature: string) => {
    if (!account) return Promise.reject('No account available');

    setLoading(true);
    try {
      const refreshedUserProfile: UserProfile = await getUserProfile(account, signature);
      setUserProfile(refreshedUserProfile);
      setLoading(false);
      return refreshedUserProfile;
    } catch (ex) {
      setLoading(false);
      throw ex;
    }
  };

  // useEffect(() => {
  //   const fun = async () => {
  //     if (address) {
  //       let newUserProfile: UserProfile | null = null;
  //       try {
  //         newUserProfile = await getUserProfile(address, signature);
  //       } catch (ex) {
  //         newUserProfile = await createUserProfile(address, signature);
  //       }
  //       setUserProfile(newUserProfile);
  //     }
  //   };
  //   fun();
  // }, [address]);

  return (
    <UserProfileContext.Provider value={{ userProfile, refreshUserProfile, loading }}>
      {children}
    </UserProfileContext.Provider>
  );
}
