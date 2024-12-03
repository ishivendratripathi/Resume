import { CollapsibleCard } from "@/components/ui/CollapsibleCard/CollapsibleCard";
import { Input } from "@/components/ui/Input/Input";
import { forwardRef } from "react";
import PropTypes from "prop-types";

const PersonalInformationCard = forwardRef(function PersonalInformationCard(
  { className, cvData, setCvData, ...props },
  ref
) {
  const handleChange = (e) => {
    setCvData({
      ...cvData,
      profile: { ...cvData.profile, [e.target.name]: e.target.value },
    });
  };

  return (
    <CollapsibleCard title="Profile" ref={ref} className={className} {...props}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          height: "100%",
          marginTop: "4px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", gap: "16px" }}>
          <Input
            placeholder="First Name"
            name="firstName"
            value={cvData.profile.firstName}
            onChange={handleChange}
          />
          <Input
            placeholder="Last name"
            name="lastName"
            value={cvData.profile.lastName}
            onChange={handleChange}
          />
        </div>
        <Input
          placeholder="Job Title"
          name="jobTitle"
          value={cvData.profile.jobTitle}
          onChange={handleChange}
        />
        <Input
          placeholder="Email"
          name="email"
          value={cvData.profile.email}
          onChange={handleChange}
        />
        <Input
          placeholder="Phone"
          name="phone"
          value={cvData.profile.phone}
          onChange={handleChange}
        />
        <Input
          placeholder="Address"
          name="address"
          value={cvData.profile.address}
          onChange={handleChange}
        />
      </div>
    </CollapsibleCard>
  );
});

PersonalInformationCard.displayName = "PersonalInformationCard";

PersonalInformationCard.propTypes = {
  className: PropTypes.string,
  cvData: PropTypes.object,
  setCvData: PropTypes.func,
};

export default PersonalInformationCard;
