import { LocaleProvider, MessageProps } from '@chatui/core';
import { FC, useEffect, useRef } from "react";
import NewsSider from './components/NewsSider';
import './style/chat.scss';

const ChatPage: FC = () => {
  const wrapper = useRef(null);

  //the the flag relying on the ability to provide recording and speech recognition 
  const canRecord = false;

  useEffect(() => {
    const bot = new window.ChatSDK({
      root: wrapper.current,
      config: {
        toolbar: [
          {
            type: 'speech',
            icon: 'mic',
            title: 'Record'
          },
          {
            type: 'upload_image',
            icon: 'camera',
            title: 'Upload'
          }

        ],
        navbar: {
          title: 'Ninatron',
        },
        loadMoreText: 'View History',
        placeholder: 'Ask anything',
        messages: [
          {
            type: 'text',
            user: {
              avatar: '/images/main_logo.png'
            },
            content: {
              text: 'What can i help you？'
            }
          }
        ],
        quickReplies: [
          { name: 'text', isHighlight: true },
          { name: 'system' },
          { name: 'image' },
          { name: 'card recommend' },
          { name: 'card promotion' },
          { name: 'card knowledge' },
          { name: 'options card' },
          { name: 'change quick replies card' },
        ],
        robot: {
          avatar: '/images/main_logo.png'
        },
        inputType: canRecord ? 'voice' : 'text',
      },
      requests: {
        autoComplete(data: any) {
          return {
            url: 'http://localhost:3999/api/auto/',
            data: {
              q: data.text,
            },
          };
        },
        send: function (msg: MessageProps) {
          if (msg.type === 'text') {
            return {
              url: 'http://localhost:3999/api/messages/',
              data: {
                q: msg.content.text
              }
            };
          }
        }
      },
      handlers: {
        parseResponse: function (res: any, requestType: string) {
          if (requestType === 'send' && res.Messages) {
            //in case the response object does not match the MessageProps
            //isvParser helper is used for parsing response to MessageProps
            return window.isvParser({ data: res });
          }

          if (requestType === 'autoComplete' && res.list?.length > 0) {
            return {
              list: res.list.slice(0, 8).map((t: any) => ({ title: t.title })),
              keyword: res.Utterance,
            };
          }
          //otherwise
          return res;
        },
        onToolbarClick: function (item: any, ctx: any) {
          if (item.type === 'speech') {
            // nativeInvoke is a "bridge object" 
            // that provides APIs to control recording or speech regonition
            window.nativeInvoke('speech', (text: any) => {
              if (text) {
                bot.appRef.current.setText(text);
              }
            });
          }
          if (item.type === 'upload_image') {
            ctx.util.chooseImage({
              multiple: true,
              success(e: any) {
                if (e.files) {
                  const file = e.files[0];
                  ctx.appendMessage({
                    type: 'image',
                    content: {
                      picUrl: URL.createObjectURL(file)
                    },
                    position: 'right'
                  });
                }
              },
            });
          }
        }
      },
    });

    bot.run();
  }, [canRecord])

  return (
    <LocaleProvider locales={{ text: 'en-US' }}>
      <div id='chat-page'>
        <NewsSider />
        <div ref={wrapper} className='chat-page-container'>
        </div>
      </div>
    </LocaleProvider>
  );
}

export default ChatPage;