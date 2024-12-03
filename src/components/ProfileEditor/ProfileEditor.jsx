import { forwardRef } from "react";
import styles from "./ProfileEditor.module.css";
import { cn } from "@/lib/utils";
import PropTypes from "prop-types";
import { CollapsibleGroup } from "../ui/CollapsibleGroup/CollapsibleGroup";
import PersonalInformationCard from "./PersonalInformationCard";
import EducationSection from "./EducationSection/EducationSection";
import WorkSection from "./WorkSection/WorkSection";

const ProfileEditor = forwardRef(function ProfileEditor(
  { className, data, setData, ...props },
  ref
) {
  return (
    <CollapsibleGroup
      defaultOpenIndex={0}
      ref={ref}
      className={cn(styles.profileEditor, className)}
      {...props}
    >
      <PersonalInformationCard cvData={data} setCvData={setData} />
      <EducationSection cvData={data} setCvData={setData} />
      <WorkSection cvData={data} setCvData={setData} />
    </CollapsibleGroup>
  );
});

ProfileEditor.displayName = "ProfileEditor";

ProfileEditor.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  setData: PropTypes.func,
};

// const WorkInformationCard = forwardRef(function WorkInformationCard(
//   { className, cvData, ...props },
//   ref
// ) {
//   return (
//     <CollapsibleCard
//       title="Experience"
//       ref={ref}
//       className={cn(styles.workInformationCard, className)}
//       {...props}
//     >
//       <FormCarousel
//         listSection={
//           <div>
//             {cvData.experience.map((exp, index) => (
//               <div key={index}>
//                 <SectionCard title={exp.company} />
//                 {index !== cvData.experience.length - 1 && <Divider />}
//               </div>
//             ))}
//           </div>
//         }
//         sectionName="Experience"
//         formSection={
//           <>
//             <TextInput labelName="Job title" />
//             <TextInput labelName="Company" />
//             <TextInput labelName="From" />
//             <TextInput labelName="To" />
//           </>
//         }
//       />
//     </CollapsibleCard>
//   );
// });

// WorkInformationCard.displayName = "WorkInformationCard";

// WorkInformationCard.propTypes = {
//   className: PropTypes.string,
//   cvData: PropTypes.object,
// };

export default ProfileEditor;
