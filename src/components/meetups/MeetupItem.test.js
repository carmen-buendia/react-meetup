/* eslint-disable testing-library/no-debugging-utils */
import React from "react";
import { mount } from "enzyme";
import MeetupItem from "./MeetupItem";
import { FavoritesContext } from "../../context/FavoritesContext";

const mockMeetup = {
  id: "m1",
  title: "Test Meetup",
  image: "https://example.com/image.jpg",
  address: "123 Test Street",
  description: "This is a test description.",
};

const mockAddFavorite = jest.fn();
const mockRemoveFavorite = jest.fn();

describe("<MeetupItem />", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <FavoritesContext.Provider
        value={{
          favorites: [],
          addFavorite: mockAddFavorite,
          removeFavorite: mockRemoveFavorite,
        }}
      >
        <MeetupItem meetup={mockMeetup} />
      </FavoritesContext.Provider>
    );
  });

  test("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  test("renders the correct title", () => {
    expect(wrapper.find("h3").text()).toBe(mockMeetup.title);
  });

  test("renders the correct image", () => {
    const img = wrapper.find("img");
    expect(img.prop("src")).toBe(mockMeetup.image);
    expect(img.prop("alt")).toBe(mockMeetup.title);
  });

  test("renders the correct address", () => {
    expect(wrapper.find("address").text()).toBe(mockMeetup.address);
  });

  test("renders the correct description", () => {
    expect(wrapper.find("p").text()).toBe(mockMeetup.description);
  });

  test("button toggles correctly for favorites", () => {
    const button = wrapper.find("button");

    expect(button.text()).toBe("Add to Favorites");
    button.simulate("click");

    expect(mockAddFavorite).toHaveBeenCalledWith(mockMeetup);
    expect(button.text()).toBe("Remove from Favorites");

    button.simulate("click");
    expect(mockRemoveFavorite).toHaveBeenCalledWith(mockMeetup.id);
    expect(button.text()).toBe("Add to Favorites");
  });

  test("matches snapshot", () => {
    expect(wrapper).toMatchSnapshot();
  });
});
