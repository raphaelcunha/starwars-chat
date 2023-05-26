import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import type IMessage from "types/messages";
import chatApi from "api/chat";

const KEY_QUERY = ["messages"];

function useGetMessage() {
  return useQuery<IMessage[]>({
    queryKey: KEY_QUERY,
    queryFn: chatApi.getMessages,
    refetchOnWindowFocus: false,
  });
}

function useMutateMessage() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: chatApi.postMessage,
    onMutate: (newMessage) => {
      // Cancel any outgoing prefetches (so they don't overwrite our optimistic update)
      queryClient.cancelQueries(KEY_QUERY);

      // Snapshot the previous value
      const previousMessages = queryClient.getQueryData(KEY_QUERY);

      const optimisticData = {
        ...newMessage,
        userName: "You",
        id: Math.random(),
        status: "pending",
        createdAt: new Date(),
      };

      // Optimistically update to the new value
      queryClient.setQueryData(KEY_QUERY, (old: any) => [
        ...old,
        optimisticData,
      ]);

      // Return a context object with the snapshot's value and the new value
      return { previousMessages, optimisticData };
    },
    onError: (error, newMessage, context) => {
      // change status to error
      queryClient.setQueryData(KEY_QUERY, (old: any) => {
        const newMessages = old.map((message: any) => {
          if (message.id === context?.optimisticData.id) {
            return {
              ...message,
              status: "error",
            };
          }
          return message;
        });
        return newMessages;
      });
    },
    onSuccess: (data, newMessage) => {
      console.log("onSuccess", data, newMessage);
    },
    onSettled: (data, error, newMessage) => {
      console.log("onSettled", data, error, newMessage);
      queryClient.invalidateQueries({ queryKey: KEY_QUERY });
    },
  });
}

export { useGetMessage, useMutateMessage };
