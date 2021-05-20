// import React from 'react';
// import RoomFilter from './RoomsFilter';
// import RoomsList from './RoomsList';
// import{withRoomConsumer} from '../Context';
// import Loading from './Loading';

// function RoomContainer ( {Context} ) {
//     const {loading, sortedRooms, rooms} = Context;
//     if (loading) {
//         return <Loading />;
//     }
//     return (
//         <>
//         <RoomFilter rooms={rooms} />
//         <RoomsList rooms={sortedRooms}/>
//         </>
//     );
// }
// export default withRoomConsumer (RoomContainer);





import React from 'react';
import RoomFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import{RoomConsumer} from '../Context';
import Loading from './Loading';
 
export default function RoomContainer() {
    return (
        <RoomConsumer>
          {value => {
            const { loading, setRoom, sortedRooms,rooms } = value;
            if (loading) {
              return <Loading />;
            }
            return (
              <>
                <RoomFilter rooms={rooms} />
                <RoomsList rooms={sortedRooms} setRoom={setRoom} />
              </>
            );
          }}
        </RoomConsumer>
      );
}
