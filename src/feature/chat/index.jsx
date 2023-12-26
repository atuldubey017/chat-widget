import React from 'react'
import '../../styles/Chat.css'
import ChatHeader from './ChatHeader'
import ChatBody from './ChatBody'
import MessageSender from './MessageSender'
export const Chat = () => {
  return (
    <section className="chat_widget">
        <ChatHeader/>
        <ChatBody/>
        <MessageSender/>
    </section>
  )
}
