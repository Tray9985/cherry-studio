import { EVENT_NAMES, EventEmitter } from '@renderer/services/EventService'
import { Button, Empty } from 'antd'
import type { FC } from 'react'
import { useTranslation } from 'react-i18next'
import styled from 'styled-components'

const ChatEmptyState: FC = () => {
  const { t } = useTranslation()

  const handleCreateTopic = () => {
    EventEmitter.emit(EVENT_NAMES.ADD_NEW_TOPIC)
  }

  return (
    <Container>
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description={null} />
      <ActionButton type="primary" onClick={handleCreateTopic}>
        {t('chat.topics.new')}
      </ActionButton>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 24px 16px;
`

const ActionButton = styled(Button)`
  border-radius: 999px;
`

export default ChatEmptyState
