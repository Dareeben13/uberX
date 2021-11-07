import Head from "next/head";
import tw from "tailwind-styled-components";

import Map from "./components/Map";

export default function Home() {
  return (
    <Wrapper>
      <Map />
      <ActionItems>
        <Header>
          <UberLogo src="https://i.ibb.co/84stgjq/uber-technologies-new-20218114.jpg" />
          <Profile>
            <Name>Kola Dare</Name>
            <UserImage src="https://media-exp1.licdn.com/dms/image/C5603AQGUxn57LmeYHw/profile-displayphoto-shrink_800_800/0/1630572292459?e=1642032000&v=beta&t=uqyFT6awkb7bf66A6JkOlvY0CJkdBniqbtjpGcOTmvk" />
          </Profile>
        </Header>
        <ActionButtons>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/cyvcpfF/uberx.png" />
            Ride
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/n776JLm/bike.png" />
            Wheels
          </ActionButton>
          <ActionButton>
            <ActionButtonImage src="https://i.ibb.co/5RjchBg/uberschedule.png" />
            Reserve
          </ActionButton>
        </ActionButtons>
        <InputButton>Where to?</InputButton>
      </ActionItems>
    </Wrapper>
  );
}

const Wrapper = tw.div`
  flex flex-col h-screen
`;

const ActionItems = tw.div`
flex-1 p-4
`;

const Header = tw.div`
  flex justify-between items-center
`;

const UberLogo = tw.img`
h-20
`;

const Profile = tw.div`
flex items-center
`;

const Name = tw.div`
  mr-4 w-20 text-sm
`;
const UserImage = tw.img`
  h-12 w-12 rounded-full border-grey-200 p-px
`;

const ActionButtons = tw.div`
  flex
`;
const ActionButton = tw.div`
  bg-gray-200 flex-1 m-1 h-32 flex items-center flex-col justify-center rounded-lg
  transform hover:scale-105 transition text-xl
`;

const ActionButtonImage = tw.img`
  h-3/5
`;

const InputButton = tw.div`
  h-20 bg-gray-200 text-2xl p-4 flex items-center mt-8
`;
