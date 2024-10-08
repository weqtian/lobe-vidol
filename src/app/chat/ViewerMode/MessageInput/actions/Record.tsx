import { ActionIcon } from '@lobehub/ui';
import { Mic } from 'lucide-react';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { useSpeechRecognition } from '@/hooks/useSpeechRecognition';
import { useSessionStore } from '@/store/session';

const Record = () => {
  const [sendMessage, setMessageInput] = useSessionStore((s) => [s.sendMessage, s.setMessageInput]);
  const { t } = useTranslation('chat');
  const handleMessageInput = useCallback(
    (result: string, isFinal: boolean) => {
      setMessageInput(result);
      if (isFinal) {
        sendMessage(result);
        setMessageInput('');
      }
    },
    [sendMessage, setMessageInput],
  );

  const { isRecording, toggleRecord } = useSpeechRecognition({
    onMessage: handleMessageInput,
  });

  return (
    <ActionIcon icon={Mic} loading={isRecording} onClick={toggleRecord} title={t('tts.record')} />
  );
};

export default Record;
