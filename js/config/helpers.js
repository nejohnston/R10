// Helper to format format individual Firebase records
export const formatDataObject = data => {
  const dataObject = Object.getOwnPropertyNames(data).map(index => data[index]);
  return dataObject[0];
};

// Helper to format Firebase data into section list data
export const formatSessionData = sessions => {
  return sessions
    .reduce((acc, curr) => {
      const timeExists = acc.find(section => section.title === curr.start_time);
      timeExists
        ? timeExists.data.push(curr)
        : acc.push({ title: curr.start_time, data: [curr] });
      return acc;
    }, [])
    .sort((a, b) => a.title - b.title);
};

export const filteredFaves = (faves, sessions) => {
  return sessions.includes(session => faves.includes(session.session_id));
};

export const formatUnixDate = date => {
  const newDate = new Date(date * 1000);
  const hours = newDate.getUTCHours() - 7;
  const minutes = newDate.getMinutes();
  return `${hours > 12 ? hours - 12 : hours}:${
    minutes === 0 ? "00" : minutes
  } ${hours > 12 ? "PM" : "AM"}`;
};
