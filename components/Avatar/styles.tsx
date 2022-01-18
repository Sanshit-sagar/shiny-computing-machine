import { styled } from '../../stitches.config'
import { Boop } from '@/components/Boop'

const replies = [
    { id: '1', photo: '🐶' },
    { id: '2', photo: '🐱' },
    { id: '3', photo: '🐰' },
    { id: '4', photo: '🐭' },
    { id: '5', photo: '🐹' },
    { id: '6', photo: '🦊' },
    { id: '7', photo: '🐻' },
    { id: '8', photo: '🐼' },
    { id: '9', photo: '🐨' }
]

const Avatar = styled('div', {
    background: 'linear-gradient(90deg,#ffa0ae 0%,#aacaef 75%)',
    height: '50px',
    width: '50px',
    borderRadius: '50%',
    border: '3px solid #4C79DF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    fontSize: '38px',
})
Avatar.displayName = 'avatar'
Avatar.toString = () => '.avatar'

const AvatarList = styled('ul', {
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: '0px',
    marginBottom: '8px',
    marginTop: '15px'
})
AvatarList.displayName = 'avatar-list'
AvatarList.toString = () => '.avatar-list'

const AvatarItem = styled('li', {
    listStyle: 'none',
    marginRight: '-10px'
})
AvatarItem.displayName = 'avatar-item'
AvatarItem.toString = () => '.avatar-item'

const AvatarEmoji = styled('span', {
    paddingRight: 0
})
AvatarEmoji.displayName = 'avatar-emoji'
AvatarEmoji.toString = () => '.avatar-emoji'

interface IAvatar {
    src?: string;
    fallback?: string;
    alt?: string;
    delay?: string; 
};

interface AvatarDatum {
    id: string;
    photo: React.ReactNode | string; 
}

export const AvatarGroup = () => (
    <AvatarList>
        {replies.map((item: AvatarDatum, index: number) => (
            <Boop rotation={30} timing={150}>
                <AvatarItem key={`item-indexed-${index}`}>
                    <Avatar>
                        <AvatarEmoji role="img"> 
                            {item.photo} 
                        </AvatarEmoji>
                    </Avatar>
                </AvatarItem>
            </Boop>
        ))}
    </AvatarList>
)