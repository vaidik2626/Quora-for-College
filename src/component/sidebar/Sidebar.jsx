import "./sidebar.css";
import {
  ThumbUpIcon,
  Bookmark,
  HelpOutline,
  School,
  TextFormatIcon,
  ApartmentIcon,
  BusinessIcon,
  DomainIcon
} from "@material-ui/icons";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
        <li className="sidebarListItem">
            <HelpOutline className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <Bookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <ThumbUpIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Liked Answer</span>
          </li>
          <li className="sidebarListItem">
            <TextFormatIcon className="sidebarIcon" />
            <span className="sidebarListItemText">Answer</span>
          </li>
          
          <li className="sidebarListItem">
            <ApartmentIcon className="sidebarIcon" />
            <span className="sidebarListItemText">CSPIT</span>
          </li>
          
          <li className="sidebarListItem">
            <ApartmentIcon className="sidebarIcon" />
            <span className="sidebarListItemText">DEPSTAR</span>
          </li>
          <li className="sidebarListItem">
            <BusinessIcon className="sidebarIcon" />
            <span className="sidebarListItemText">I2IM</span>
          </li>
          <li className="sidebarListItem">
            <School className="sidebarIcon" />
            <span className="sidebarListItemText">PDPIAS</span>
          </li>
          <li className="sidebarListItem">
            <DomainIcon className="sidebarIcon" />
            <span className="sidebarListItemText">CMPCIA</span>
          </li>
          <li className="sidebarListItem">
            <DomainIcon className="sidebarIcon" />
            <span className="sidebarListItemText">RPCP</span>
          </li>
        </ul>
        <hr className="sidebarHr" />
      </div>
    </div>
  );
}